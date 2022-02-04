import {LoadingStyle} from './styles'

export default function Loading() {
    return (
      <LoadingStyle> 
        <div className="loading__component">
          <div className='loader'>
            <div className='spinner2'>
              <div className='container-B'>
                <div className='hex0'></div>
                <div className='hex120'></div>
                <div className='hex240'></div>
                <div className='spinner2'>
                  <div className='container-B'>
                    <div className='hex0'></div>
                    <div className='hex120'></div>
                    <div className='hex240'></div>
                    <div className='spinner2'>
                      <div className='container-B'>
                        <div className='hex0'></div>
                        <div className='hex120'></div>
                        <div className='hex240'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LoadingStyle>
    );
  }