import style from './InitialReactApp.module.css';

function InitialReactApp(props) {
    return <div className={style.blueColor}> InitialReactApp {props.dataFromParent} </div>
}

export default InitialReactApp;