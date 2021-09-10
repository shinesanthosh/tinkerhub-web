export const validateInput = (value, control) => {
  if (control == undefined || control == null) {
    return true
  } else {
    if (control.includes('REQ_EMAIL')) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (re.test(String(value).toLowerCase()))
        return { status: true, message: '' }
      else return { status: false, message: 'Enter a valid email' }
    } else if (control.includes('REQ')) {
      if (value == '' || value == undefined || value == null)
        return { status: false, message: 'Please fill this field' }
      else return { status: true, message: '' }
    }
  }
}
