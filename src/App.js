import './App.css';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCardList';
import Rating from './components/Rating/Rating';
import DriverCard from './components/DriverCard/DriverCard';

function App() {
  return (
    <div>
      <IdCard 
        picture="https://randomuser.me/api/portraits/men/44.jpg" 
        firstName="Jhon" 
        lastName="Doe" 
        gender="male" 
        height={178} 
        birth={new Date("1992-07-14").toLocaleDateString()}
      />
      <IdCard 
        picture="https://randomuser.me/api/portraits/women/44.jpg" 
        firstName='Obrien' 
        lastName='Delores ' 
        gender='female'  
        height={172} 
        birth={new Date("1988-05-11").toLocaleDateString()}
      />
      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
      <BoxColor r={255} g={0} b={0}/>
      <BoxColor r={128} g={255} b={0}/>
      <CreditCard/>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}
      />
    </div>
    );
}

export default App;
