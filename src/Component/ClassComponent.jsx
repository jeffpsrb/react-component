import React from "react";

class ClassComponents extends React.Component {
    constructor(props) {
        super (props)

        this.state = {
            tanggal: 1
        }
        this.handleTambah = this.handleTambah.bind(this);
        this.handleKurang = this.handleKurang.bind(this);

    }
    handleTambah(){
        if(this.state.tanggal > 0 && this.state.tanggal < 31){
            this.setState({tanggal: this.state.tanggal + 1})
        }
    }
    handleKurang(){
        if(this.state.tanggal > 0 ){
            this.setState({tanggal: this.state.tanggal - 1})
        }
    }
    

    render(){
        return (
            <div>
                <h1>Hai Saya {this.props.nama}</h1>
                <h2>ini adalah website tugas saya</h2>
                <h3>Berapa tanggal lahir anda?</h3>
                <button onClick= {this.handleKurang}> - </button>
                <span>{' '} {this.state.tanggal} {''}</span>
                <button onClick={this.handleTambah}> + </button>
            </div>
        )
    }
}
export default ClassComponents;