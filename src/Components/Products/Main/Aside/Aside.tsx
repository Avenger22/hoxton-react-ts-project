import Category from '../Category/Category'
import "../Aside/Aside.css"
import { useStore } from '../../../../Store/store'

function Aside() {

    const {handleOnClickCategory} = useStore()

    const categories = ['Default', 'Multivitamins',
    'Pre-Workouts', 'Creatine', 'Testosterone-Boosters', 
    'Aminoacids', 'Weight-Burner', 'Weight-Gainers', 'Proteins' ]

    return (

        <>
        
            <aside className="aside-container-1">
                                
                <ul className="ul-aside">

                    <li id="special-aside">Categories</li>
   
                    {

                        categories.map(item =>
                           
                            <Category 
                                key = {item}
                                item = {item}
                                handleOnClickCategory = {handleOnClickCategory}
                            />

                        )

                    }
                        
                </ul>
                    
            </aside>
                                
            <aside className="aside-container-2">
                
            </aside>

        </>

    )

}

export default Aside