import {LoadingSimpleStyle} from './styles'

export default function LoadingSimple() {
    return (
      <LoadingSimpleStyle> 
        <div className="loading__component">
          <div className="loading--fill"></div>
        </div>
      </LoadingSimpleStyle>
    );
  }