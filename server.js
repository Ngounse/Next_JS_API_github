const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handel = app.getRequestHandler()

app.prepare()
.then(() => {
      const server = express()

      server.get('/DynamicPage/:username',(req,res) => {
            app.render(req,res,`/DynamicPage/?username=${username}`,{username:req.params.username})
      })
      
      server.get('/ninjas/index',(req,res) => {
            app.render(req,res,`/ninjas/index`,{ninjas:req.params.ninjas})
      })

      server.get('/github/:username/repo',(req,res) => {
            app.render(req,res,`/github/${username}/repo`,{username:req.params.username})
      })

      // server.get('/github:username/follwing',(req,res) => {
      //       app.render(req,res,`/github/?username=${username}/follwing`,{username:req.params.username})
      // })

      // server.get('/github:username/follwer',(req,res) => {
      //       app.render(req,res,`/github/?username=${username}/follwer`,{username:req.params.username})
      // })

      

      // server.get('/posts/:query',(req,res) => {
      //       app.render(req,res,`/posts/?q=${query}`,{query:req.params.queryquery})
      // })

      server.get('*',(req,res) => {
            return handel(req,res)
      })

      server.listen(3000,err => {
            if(err) throw err;
            console.log('ready on http://localhost:3000')
      })
})

.catch(ex => {
      console.error(ex.stack)
      process.exit(1)

})
