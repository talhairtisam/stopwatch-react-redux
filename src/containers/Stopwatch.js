import React, { useState,useEffect,useRef } from 'react';
import Button from '../components/Button';
import DisplayTime from '../components/DisplayTime';
import { connect } from 'react-redux';
import { startAction, stopAction, resetAction } from '../redux/action';

var incrementer = null;
var nextCount = 0;

const Stopwatch = (props) => {

    
    const [checker, toggleChecker] = useState(true);
    const [count, setCount] = useState(0);
    var prevProps = useRef({isStart:true,doReset:false})

    const increase = () =>{
        if(!props.isStart){
            return;
        }
        nextCount = nextCount + 1;
        setCount(nextCount);
    }

    const startTimer =()=>{
        incrementer = setInterval(()=>{
            increase();
        },1000);
    }

    const stopTimer=()=>{
        clearInterval(incrementer);
    }

    const resetTimer=()=>{
        clearInterval(incrementer);
        nextCount = 0;
        setCount(nextCount);
        console.log("reset");
    }

    useEffect(() => {
        if(props.isStart !== prevProps.current.isStart)
        {
            if(props.isStart){
                startTimer();
            }else{
                stopTimer();
            }
        }
        
        if(props.doReset !== prevProps.current.doReset)
        {
            if(props.doReset){
                resetTimer();
            }
        }

        return () => {
            prevProps.current.isStart = props.isStart;
            prevProps.current.doReset = props.doReset;
        }
        
    }, [checker]);

    const effect =()=> toggleChecker(!checker);
  
    
    return (
        <div className="Stopwatch">
            <h1>Stopwatch</h1>
            <DisplayTime count={ count }/>
            <div className='buttons' onClick={effect}>
                {props.isStart? 
                (<Button buttonTitle='Stop' onclick={props.stop} />) 
                : (<Button buttonTitle='Start' onclick={props.start} />)}
                <Button buttonTitle='Reset' onclick={props.reset} />
            </div>
            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        start: () => dispatch(startAction()),
        stop:()=>dispatch(stopAction()),
        reset:()=>dispatch(resetAction())
    }
}

const mapStateToProps = (state) => {
    return {
        isStart: state.isStart,
        doReset: state.doReset
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Stopwatch);

