import rsa from 'k6/x/rsa';

export default function () {

  let privateKeyPEMFormat = `-----BEGIN PRIVATE KEY-----
... to be replaced with your private key ...
-----END PRIVATE KEY-----`

  const toBeSignedContent = `content`;

  try {
    let signedJwtFromString = rsa.signFromString(toBeSignedContent, privateKeyPEMFormat)

    console.log(`signedJwtFromString: ${signedJwtFromString}`)

  } catch (error) {
    console.log(error.toString())
  }
}