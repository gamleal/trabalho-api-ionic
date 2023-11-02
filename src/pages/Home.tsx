import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonAlert } from '@ionic/react';
import './Home.css';
import { useState } from "react";
import api from "../api/api";

const Home: React.FC = () => {
  const [image, setImage] = useState('https://e7.pngegg.com/pngimages/848/874/png-clipart-doge-bread-memes-doge-shiba-inu.png');

  const searchAPI = async () => {
    const response = await api.get("");
    console.log(response.data);
    if(response.data.status === "success") {
      setImage(response.data.message);
    }
  };

  return (
    <IonPage className="ion-page blue-txt">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Bem-vindo ao Meu Site</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p className="green-txt">Este é um parágrafo de exemplo</p>
        <IonButton id="present-alert" className="btn-color" onClick={searchAPI}>Clique aqui para cachorro</IonButton>
        <IonAlert trigger="present-alert" header="Alerta" subHeader="Você clicou no botão" buttons={['OK']}></IonAlert>
        <h2 className="black-txt">Seção Importante</h2>
        <p className="green-txt">Este é um parágrafo de exemplo</p>
        <img src="https://www.unijui.edu.br/templates/template_unijui2016/images/logo.png" alt="Logo exemplo" />
        <br/>
        <img src={image} className="dog-img"/>
      </IonContent>
      
    </IonPage>
  );
};

export default Home;