// #region 'Importing'
import "../Home/Home.css"
import FooterCommon from '../../Components/Common/FooterCommon/FooterCommon'
import HomeContainer1 from "../../Components/Home/HomeContainer1/HomeContainer1"
import HomeContainer2 from "../../Components/Home/HomeContainer2/HomeContainer2"
import HomeContainer3 from "../../Components/Home/HomeContainer3/HomeContainer3"
import HomeContainer4 from "../../Components/Home/HomeContainer4/HomeContainer4"
import HomeContainer5 from "../../Components/Home/HomeContainer5/HomeContainer5"
import HomeContainer10 from "../../Components/Home/HomeContainer10/HomeContainer10"
import HomeContainer6 from "../../Components/Home/HomeContainer6/HomeContainer6"
import HomeContainer7 from "../../Components/Home/HomeContainer7/HomeContainer7"
import HomeContainer8 from "../../Components/Home/HomeContainer8/HomeContainer8"
import ButtonTop from '../../Components/Common/ButtonTop/ButtonTop'
import HomeModalPop from '../../Components/Home/HomeModalPop'
// #endregion

function Home() {

    return (

        <>

            <ButtonTop />

            <HomeModalPop />

            <HomeContainer1 />

            <HomeContainer2 />
        
            <HomeContainer3 />

            <HomeContainer4 />
        
            <HomeContainer5 />

            <HomeContainer6 />
        
            <HomeContainer7 />

            <HomeContainer8 />

            <HomeContainer10 />

            <FooterCommon />

        </>

    )

}

export default Home