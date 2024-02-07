import { useContext } from 'react';
import style from './InitialReactApp.module.css';
import { Context } from '../state/dummy-context';

function InitialReactApp(props) {

    const dummyContext = useContext(Context);

    return <div className={style.blueColor}>
        InitialReactApp {props.dataFromParent}
        <div>
            {dummyContext.dummyData.map((data, i) => <div key={i}>{data}</div>)}
        </div>
    </div>
}

export default InitialReactApp;