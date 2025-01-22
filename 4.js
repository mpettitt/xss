function xss(payload){
  console.log('xss function redirecting');
  window.location.href = 'https://www.example.com';
}

xss();
