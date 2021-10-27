import {
    IonButton,
    IonContent,
    IonHeader,
    IonItem,
    IonList,
    IonPage,
    IonPopover,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
          <div className="container">
              <IonButton id="popover-trigger-button">Show Popover</IonButton>
              <IonPopover trigger="popover-trigger-button">
                  <IonList>
                      <IonItem>Popover Item 1</IonItem>
                  </IonList>
              </IonPopover>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
