import React, {Component} from 'react';
import './App.css';

class  App extends Component {


    state = {
      loading : true,
      nbrSecret : 0
    }
    
      
    componentDidMount = () =>{
      setTimeout( () => {
        this.setState({loading : false })
      }, 3000)

      this.setState({nbrSecret : Math.floor(Math.random() * (20 - 0 + 1)) + 0 })
    }

    rechose = () =>{

      alert('Bravo vous avez trouvé la bonne réponse')
      this.setState({loading : true })
      setTimeout( () => {
        this.setState({loading : false })
      }, 3000)

      this.setState({nbrSecret : Math.floor(Math.random() * (20 - 0 + 1)) + 0 })
    }
  
    btnVerif = () => {

      this.useeNbr.value < this.state.nbrSecret ?

        (alert('Votre nombre est trop petit')) :

        this.useeNbr.value > this.state.nbrSecret ?

        (alert('Votre nombre est trop grand')) :
        
        (this.rechose()
        )

    }
  render(){
  return (
    <div className="App">
      <header className="App-header">

        {this.state.loading ?
        
        (<label>Chargement en cours...{console.log(this.state.loading)}</label> ) : (


          <div>
          <label>Le nombre secret est entre 0 et 20</label> <br />
          <input
            className="input-nbrUser"
            type='text'
            placeholder='Entrez un nombre ici'
            autoFocus
            ref={ref => this.useeNbr = ref}
          /> <br />
          <input
            className="input-submit"
            type='submit'
            value={"Vérifier"}
            onClick={
              this.btnVerif
            }
            
          />
        </div>
        )

        }
        
        
      </header>
    </div>
  );
}
}

export default App;
