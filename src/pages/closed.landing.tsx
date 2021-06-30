import { useHistory } from 'react-router-dom';

import { LogoIcon } from '../components/LogoIcon';
import { Button } from '../components/Button';

import Apresentation from '../assets/images/close.svg';

import { ClosedStyles } from '../assets/styles/landing.styles';

export const ClosedRoom = () => {
    const history = useHistory();

    const handleGoHome = async () => {
        history.push('/');
    };

    return (
        <ClosedStyles>
            <header>
                <div className="content">
                    <LogoIcon />
                </div>
            </header>

            <main>
                <div className="question-list">
                    <div className="emptyContent">
                        <img src={Apresentation} alt="Imagem de apresentação" />
                        <h3>A sala foi encerrada...</h3>
                        <Button type="button" onClick={handleGoHome}>
                            Ok, voltar à tela inicial
                        </Button>
                    </div>
                </div>
            </main>
        </ClosedStyles>
    );
};
