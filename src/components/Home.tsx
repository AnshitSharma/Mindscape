
import Landing from './Landing'
import Testimonials from './Testimonials'
import SurveySection from './SurveySection'
import Contactus from './Contactus'




export default function Home() {
  return (
<div className="w-full min-h-screen font-rubik overflow-x-hidden overflow-y-auto">
   
        <Landing />
        <SurveySection />
      
        <Testimonials />
    <Contactus/>
  
   
       
  </div>
  )
}
