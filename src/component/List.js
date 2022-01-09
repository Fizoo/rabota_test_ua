import React from 'react';
import {useSelector} from "react-redux";
import Card from "./Card";

const List = () => {
    let cards=useSelector(state=>state.status)

    //const dispatch=useDispatch()

            return (
        <div className='main'>
            {/*<button className='button3' onClick={() => dispatch(actions.reset())}>Reset</button>*/}
            {
                cards.map(card =><Card key={card.id} {...card}/>)
            }

        </div>
    );
};

export default List;


