import { IonContent, IonHeader, IonPage, IonTitle,
         IonToolbar, IonButton } from '@ionic/react';
import React, { useState } from 'react';
// import { Plugins, CameraResultType } from '@capacitor/core';
import { Camera, CameraResultType } from '@capacitor/camera';

const Home: React.FC = () => {
  // const { Camera } = Plugins;
  const [photo, setPhoto] = useState<any>();
  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    setPhoto(image.webPath);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
         {photo ? <img src={photo} alt="test camera" /> : <span>There is no picture yet.</span>}
        <IonButton onClick={takePhoto}>Take Photo</IonButton>
        <IonButton href="/new">new Page</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;