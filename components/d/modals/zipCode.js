import React, { useContext, useState } from 'react';
import { Modal, Search } from 'semantic-ui-react';
import { AddressContext } from '@store/_global/address';
import Button from '@components/d/_dumb/button';
import SmartyStreetsSDK from 'smartystreets-javascript-sdk';

const SmartyStreetsCore = SmartyStreetsSDK.core;
const Lookup = SmartyStreetsSDK.usAutocomplete.Lookup;
const LookupZip = SmartyStreetsSDK.usZipcode.Lookup;

export default function ZipCode() {

  const addressContext = useContext(AddressContext);
  const [value, setValue] = useState('')
  const [searchSuggestions, setsearchSuggestions] = useState([])


  function handleInputChange(e, { value }) {

    // Set state of user input in search
    setValue(value)

    // SmartyStreets Config!
    const credentials = new SmartyStreetsCore.SharedCredentials('5559208387674293');
    let client = SmartyStreetsCore.buildClient.usAutocomplete(credentials);

    let lookup = new Lookup(value);

    // Options for smartStreets:
    // https://smartystreets.com/docs/cloud/us-zipcode-api#input-fields
    lookup.maxSuggestions = 10;
    lookup.geolocate = true;
    lookup.geolocatePrecision = 'city';

    client.send(lookup)
      .then(logSuggestions)
      .catch(console.log);
  }

  function logSuggestions(response) {
    const { result } = response
    let newArr = []

    // Restructure object from smartystreets. Must have title for Semantic UI
    result.map(item => {
      const { city, state, streetLine, text} = item;

      const newObj = {
        city: city,
        state: state,
        streetline: streetLine,
        title: text
      }

      newArr.push(newObj)
    })

    setsearchSuggestions(newArr)
  }



  function viewResults(response) {
    addressContext.setZipCodeFN(response.lookups[0].result[0].zipcodes[0].zipcode)
  }

  // Select result
  function handleResultSelect(e, { result }) {

    addressContext.setAddressCodeFN(result)

    // SmartyStreets Config!
    const credentials = new SmartyStreetsCore.SharedCredentials('5559208387674293');
    let client = SmartyStreetsCore.buildClient.usZipcode(credentials);

    let lookup2 = new LookupZip();
    lookup2.city = result.city;
    lookup2.state = result.state

    client.send(lookup2)
      .then(viewResults)
      .catch(console.log);
  }

  return (
    <Modal.Content>
      <h2>Enter your address to find the best deals for your home.</h2>
      <Modal.Description>
        <Search
          onResultSelect={handleResultSelect}
          onSearchChange={handleInputChange}
          results={searchSuggestions}
          value={value}
        />
        <Button color="red">Check availability </Button>
      </Modal.Description>
    </Modal.Content>
  )
}
