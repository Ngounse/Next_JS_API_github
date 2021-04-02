import {useEffect} from 'react'
import Typography from '@material-ui/core/Typography'
import {useRouter} from 'next/router'

const pageNotfound = () => {
const router = useRouter()
      useEffect(()=>{
            setTimeout(()=>{
                  // this will back by 1
                  // router.go(-1)
                  // this will go to index 
                  // router.push('/')
            },5000)
      },[])

      return ( 
            
            <div>
                  <Typography
                        variant="h2"
                        align="center"
                        color="error"
                        component="h6"
                  >
            Opppp! page not found !!! 
            </Typography>
            <br />
            <Typography
                        variant="h6"
                        align="center"
                        color="textSecondary"
                  >
            will back to home in 5 sec  
            </Typography>
                  <h5></h5>
            </div>
       );
}
 
export default pageNotfound;