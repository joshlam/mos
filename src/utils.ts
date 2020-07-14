export enum DeviceSize {
  DESKTOP,
  MOBILE,
}

export const getDeviceSize = (): DeviceSize => {
  return window.innerWidth <= 840 ? DeviceSize.MOBILE : DeviceSize.DESKTOP
}
