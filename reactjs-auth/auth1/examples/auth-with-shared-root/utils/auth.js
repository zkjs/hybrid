import axios from 'axios'

module.exports = {
    login(email, pass, cb) {
        cb = arguments[arguments.length - 1]
        if (localStorage.token) {
            if (cb) cb(true)
            this.onChange(true)
            return
        }
        realRequest(email, pass, (res) => {
            if (res.authenticated) {
                localStorage.token = res.token
                if (cb) cb(true)
                this.onChange(true)
            } else {
                if (cb) cb(false)
                this.onChange(false)
            }
        })
    },
      registerRequest:function(email,pass,cb){

          axios.post('http://localhost:3000/users/register', {
                  username: email,
                  password: pass
              })
              .then(function (response) {
                  cb({
                      authenticated: false//true,
                      //token: response.data.token
                  })
              })
              .catch(function (error) {
                  cb({ authenticated: false })
              });

      },
  /* pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        this.onChange(false)
      }
    })
  },*/

  getToken: function () {
    return localStorage.token
  },

  logout: function (cb) {
    delete localStorage.token
    if (cb) cb()
    this.onChange(false)
  },

  loggedIn: function () {
    return !!localStorage.token
  },

  onChange: function () {}
}
/*
function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    if (email === 'joe@example.com' && pass === 'password1') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({ authenticated: false })
    }
  }, 0)
}*/

function realRequest(email,pass,cb){

  axios.post('http://localhost:3000/users/auth', {
        username: email,
        password: pass
      })
      .then(function (response) {
        cb({
          authenticated: true,
          token: response.data.token
        })
      })
      .catch(function (error) {
        cb({ authenticated: false })
      });

}
