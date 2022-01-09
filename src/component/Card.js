import React from 'react';
import respondImg from './../logo/Button.png'
import star from './../logo/Button 2.png'
import dislikeImg from './../logo/Icon-Dislike-Empty.png'
import starFilled from './../logo/Icon-Favorite-Star-Filled.png'
import dislikeFilled from './../logo/Icon-Dislike-Filled.png'
import {useDispatch} from "react-redux";
import {actions} from "../redux";
import {UploadClient} from "@uploadcare/upload-client";


const Card = ({...props}) => {


    const dispatch = useDispatch()
    //const states=useSelector(state=>state.status)

    const downloadFile = (e) => {

        const client = new UploadClient({publicKey: '0e835cd0740edffd80c5'})
        const file = e.target.files[0]
        const types = file.type.split('/')[0]
        console.log(file)
        if (file.size > 2000000) {
            dispatch(actions.error(props.id, 'Ёлки-палки, этот файл просто огромный и не помещается в наш сервер'))
            //alert('File more than 2 MB' )
            return
        }
        if (types !== 'image') {
            dispatch(actions.error(props.id, 'Error file,select an image'))
            // alert('Error file,select an image')
            return;
        }
        dispatch(actions.addFile(props.id, `https://ucarecdn.com/${file.uuid}/`))

        client
            .uploadFile(file)
            .then(file => {
                     alert('Your file uploaded successfully')
                dispatch(actions.respond(props.id))
                    dispatch(actions.error(props.id, ''))
                    dispatch(actions.addFile(props.id, `https://ucarecdn.com/${file.uuid}/`))
                    alert(`https://ucarecdn.com/${file.uuid}/`)
                }
            )
            .catch(err => alert(err))
        dispatch(actions.addFile(props.id, `https://ucarecdn.com/${file.uuid}/`))
    }

    return (
        <div className='cards' style={{opacity: (props.isResponded || props.isDislike) && .5}}>
            <div className='mainLogo'>
                <img src={props.img} width='100%' height='100' alt=""/>
            </div>
            {props.status.name !== '' && <div className='status'>
                <div className='statusText' style={{backgroundColor: props.status.color}}>
                    {props.status.name}
                </div>

            </div>}
            <div className='vacancy'>
                <div className='vacancyText'>
                    {props.vacancy}
                </div>
                <div className='vacancyLogo'>
                    <img src={props.logo} alt=""/>
                </div>
            </div>
            <div className='salary'>
                <div className='salaryText'>
                    <span>{props.salary.size}</span>

                    <span style={{color: 'gray'}}> {props.salary.commit}</span>
                </div>
            </div>
            <div className='city'>
                <div className='cityCompany'>
                    {props.company}
                </div>
                <div className='cityName'>
                    {props.city}
                </div>
            </div>
            <div className='badges'>
                <ul>
                    {props.badges.map((el,i) => <li key={i}>{el}</li>)}
                </ul>
            </div>
            <div className='action'>
                <div className='actions'>

                    {!props.isResponded && <label className="custom-file-upload">
                        <input type="file" onChange={downloadFile}/>
                        <img src={respondImg} alt=''/>
                    </label>}

                    <button className='button2' onClick={() => dispatch(actions.favorite(props.id))}>
                        <img src={props.isFavorites ? starFilled : star} alt=""/>
                    </button>
                    <button onClick={() => dispatch(actions.dislike(props.id))} className='button3'>
                        <img src={props.isDislike ? dislikeFilled : dislikeImg} alt=""/>
                    </button>
                    <button className='button3' onClick={() => dispatch(actions.reset())}>Reset</button>

                </div>
                <div className='time'>
                    <span style={{color: 'gray'}}>{props.time}</span>
                </div>
            </div>
            {props.error !== '' && <div className='error'>
                {props.error}
            </div>}
        </div>
    );
};

export default Card;
