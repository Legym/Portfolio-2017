import React, { useContext } from 'react';
import Link from 'next/link';
import Icon from '@components/_global/icons/icons';
import ZipCodeModal from '@components/d/modals/zipCode';
import { Button, Modal } from 'semantic-ui-react';
import { AddressContext } from '@store/_global/address';
import Axios from 'axios';

export default function Masthead() {
  const addressContext = useContext(AddressContext);

  function openGeoLocater() {
    navigator.geolocation.getCurrentPosition(success, error, options);

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;

      Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${crd.latitude},${crd.longitude}&result_type=postal_code&key=AIzaSyAtjahoSR6EfvJU-pKyL-y6dP5ZB2Ik1Cs`)
        .then(res => {
          addressContext.setZipCodeFN(res.data.results[0].address_components[0].short_name)
        })
        .catch(err => {
          console.log(err)
        })
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  }

  return (
    <header className="header">
      <div className="grid-container">
        <div className="grid-x">

          <div className="cell large-10">
            <div className="navigation">

              <Link href="/d">
                <img src="/static/_global/images/logo-frontier-red.svg" alt="" />
              </Link>

              <ul className="menu">
                <li>
                  <Link href="/d/shop-plans">
                    <a>Shop Plans</a>
                  </Link>
                </li>
                <li>
                  <Link href="/d/current-customers">
                    <a>Current Customers</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="cell large-2 align-right">
            <div>
              <Modal trigger={<Button><Icon name="account" color="black" />Showing prices for { addressContext.state.zipcode }</Button>}>
                <ZipCodeModal />
              </Modal>

              <Button onClick={openGeoLocater}>Open Geo locater</Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .header {
            padding: 32px;
          }

          .navigation,
          .menu {
            display: flex;
          }

          .menu li {
            list-style: none;
          }
        `}
      </style>
    </header>
  );
}
