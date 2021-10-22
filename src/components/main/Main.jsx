import React from "react";
import './Main.css';
import Medica from '../../assets/medica.jpg';
import Cadence from '../charts/Charts.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faBatteryFull,
    faChartArea,
    faChartBar,
    faClock,
    faRecycle,
    faRoad,
    faRobot,
    faRunning,
    faShoePrints,
    faTachometerAlt,
    faThumbsDown,
    faThumbsUp,
    faWalking,
    faWifi 
} from "@fortawesome/free-solid-svg-icons"; 


const Main = () => {
    return (
        <main>
            
            {/* Conteúdo do painel */}

            <div className="main__container">
                
                {/* Título do painel */}

                <div className="main__title">
                    <img src={ Medica } alt="imagem" />
                    <div className="main__greeting">
                        <h1>Olá Julia</h1>
                        <p>Bem Vindo ao seu painel</p>
                    </div>
                </div>

                {/* Informações principais */}

                <div className="main__cards">
                    

                    <div className="main__card">
                        <FontAwesomeIcon icon={faWalking} className="main__icon text-lightblue"/>
                        <div className="main__card__inner">
                            <p className="text-primary-p">Número de passos</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="main__card">
                        <FontAwesomeIcon icon={faRoad} className="main__icon text-red"/>
                        <div className="main__card__inner">
                            <p className="text-primary-p">Distância</p>
                            <span className="font-bold text-title">5</span>
                        </div>
                    </div>

                    <div className="main__card">
                        <FontAwesomeIcon icon={faRecycle} className="main__icon text-yellow"/>
                        <div className="main__card__inner">
                            <p className="text-primary-p">Ciclos</p>
                            <span className="font-bold text-title">23</span>
                        </div>
                    </div>

                    <div className="main__card">
                        <FontAwesomeIcon icon={faShoePrints} className="main__icon text-green"/>
                        <div className="main__card__inner">
                            <p className="text-primary-p">Pressão</p>
                            <span className="font-bold text-title">74</span>
                        </div>
                    </div>


                </div>

                {/* Gráficos */}

                <div className="main__charts">
                    

                    <div className="charts__2">

                        <div className="charts__2__title">
                            
                            <div>
                                <h1>Cadência</h1>
                            </div>

                            <FontAwesomeIcon icon={faChartArea} className="main__icon" />

                        </div>

                        <Cadence />

                    </div>


                    <div className="charts__1">
                        
                        <div className="charts__1__title">

                            <div>
                                <h1>Pressões</h1>
                            </div>

                            <FontAwesomeIcon icon={faTachometerAlt} className="main__icon" />
                            
                        </div>

                        {/* Sub gráficos */}

                        <div className="charts__1__cards">

                            <div className="card1">
                                <h1>Antepé</h1>
                                <p>20</p>
                            </div>
                            
                            <div className="card2">
                                <h1>Meiopé</h1>
                                <p>20</p>
                            </div>

                            <div className="card2">
                                <h1>Retropé</h1>
                                <p>20</p>
                            </div>

                            <div className="card4">
                                <h1>Média</h1>
                                <p>20</p>
                            </div>

                        </div>

                        
                    </div>


                    <div className="charts__1">
                        
                        <div className="charts__1__title">

                            <div>
                                <h1>Marcha</h1>
                            </div>

                            <FontAwesomeIcon icon={faChartBar} className="main__icon" />
                            
                        </div>

                        {/* Sub gráficos */}

                        <div className="charts__1__cards">

                            <div className="card1">
                                <h1>Comprimento</h1>
                                <p>20</p>
                            </div>
                            
                            <div className="card2">
                                <h1>Medida</h1>
                                <p>20</p>
                            </div>

                            <div className="card2">
                                <h1>Cadência</h1>
                                <p>20</p>
                            </div>

                            <div className="card4">
                                <h1>Altura</h1>
                                <p>20</p>
                            </div>

                        </div>

                        
                    </div>


                    <div className="charts__2">

                        <div className="charts__2__title">
                            
                            <div>
                                <h1>Pressão</h1>
                            </div>

                            <FontAwesomeIcon icon={faRunning} className="main__icon" />

                        </div>


                    </div>


                    <div className="charts__2">

                        <div className="charts__2__title">
                            
                            <div>
                                <h1>Balanço Apoio</h1>
                            </div>

                            <FontAwesomeIcon icon={faChartArea} className="main__icon" />

                        </div>


                    </div>


                    <div className="charts__2">

                        <div className="charts__2__title">
                            
                            <div>
                                <h1>Flexão e Deflexão</h1>
                            </div>

                            <FontAwesomeIcon icon={faChartArea} className="main__icon" />

                        </div>


                    </div>


                    <div className="charts__2">

                        <div className="main__card">
                            <FontAwesomeIcon icon={faWifi} className="main__icon text-lightblue"/>
                            <div className="main__card__inner">
                                <p className="text-primary-p">Conexão</p>
                                <span className="font-bold text-title">200</span>
                            </div>
                        </div>

                        <div className="main__card">
                            <FontAwesomeIcon icon={faClock} className="main__icon text-red"/>
                            <div className="main__card__inner">
                                <p className="text-primary-p">Latência</p>
                                <span className="font-bold text-title">1</span>
                            </div>
                        </div>

                        <div className="main__card">
                            <FontAwesomeIcon icon={faBatteryFull} className="main__icon text-yellow"/>
                            <div className="main__card__inner">
                                <p className="text-primary-p">Bateria</p>
                                <span className="font-bold text-title">1</span>
                            </div>
                        </div>

                        <div className="main__card">
                            <FontAwesomeIcon icon={faTachometerAlt} className="main__icon text-green"/>
                            <div className="main__card__inner">
                                <p className="text-primary-p">Cpu</p>
                                <span className="font-bold text-title">1</span>
                            </div>
                        </div>

                    </div>


                </div>

                {/* Resultados */}

                <div className="main__cards">
                    

                    <div className="main__card">
                        <FontAwesomeIcon icon={faShoePrints} className="main__icon text-lightblue"/>
                        <div className="main__card__inner">
                            <p className="text-primary-p">Tipo de marcha</p>
                            <span className="font-bold text-title">Patológica</span>
                        </div>
                    </div>

                    <div className="main__card">
                        <FontAwesomeIcon icon={faRobot} className="main__icon text-red"/>
                        <div className="main__card__inner">
                            <p className="text-primary-p">Probabilidade</p>
                            <span className="font-bold text-title">58%</span>
                        </div>
                    </div>

                    <div className="main__card">
                        <FontAwesomeIcon icon={faThumbsUp} className="main__icon text-yellow"/>
                        <div className="main__card__inner">
                            <p className="text-primary-p">Acerto</p>
                            <span className="font-bold text-title">92%</span>
                        </div>
                    </div>

                    <div className="main__card">
                        <FontAwesomeIcon icon={faThumbsDown} className="main__icon text-green"/>
                        <div className="main__card__inner">
                            <p className="text-primary-p">Erro</p>
                            <span className="font-bold text-title">8%</span>
                        </div>
                    </div>


                </div>

            </div>
        </main>
    )
}

export default Main

