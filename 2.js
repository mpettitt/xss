function xss(payload){
  alert('xss function alert');
  console.log('xss function console log');
  eval(payload)
}
