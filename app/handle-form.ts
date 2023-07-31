import { BaseSyntheticEvent } from 'react'

export const sendToGoogleSheet = (e?: BaseSyntheticEvent) => {
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbzBlalwJlndQMeiZH7valybQYyeiJLZPUQie-NHPT7q2TU8djYOeM3pUb_6Qp4Q1cib7g/exec'

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(e?.target as HTMLFormElement),
  })
}
