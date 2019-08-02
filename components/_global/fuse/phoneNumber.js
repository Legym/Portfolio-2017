import React from 'react';
import { CohesionState } from '@store/_global/cohesion';

export default function PhoneNumber() {
  const { fuse } = CohesionState();

  function formatPhone() {
    const phone = fuse.phone.toString();

    return `1.${phone.substring(0, 3)}.${phone.substring(3, 6)}.${phone.substring(6, 10)}`;
  }

  return (
    <>
      {fuse === null ? '' : formatPhone()}
    </>
  )
}
