import { QRCode } from 'antd'

const QrCode = (props) => {
  const { qrCodeString, style } = props

  return <QRCode value={qrCodeString || '-'} style={style} />
}

export default QrCode
