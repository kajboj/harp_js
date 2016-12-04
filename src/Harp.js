import React, { Component } from 'react';

var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]

function HolesRow(props) {
  var holes = props.holes.map((hole) => {
    return (<td key={hole}>{hole}</td>);
  })
  return (<tr>{holes}</tr>);
}

function NotesRow(props) {
  var holes = props.notes.map((note, index) => {
    var value
    if (note != null) {
      var c = notes.length
      value = notes[(c+(note%c))%c]
    } else {
      value = ""
    }
    return (<td key={index}>{value}</td>);
  })

  return (<tr>{holes}</tr>);
}

class Harp extends Component {
  render() {
    return (
      <div className="Harp">
      harp in the key of {this.props.harp.key} goes here
      <table>
        <tbody>
          <NotesRow notes={this.props.harp.blowBend2}/>
          <NotesRow notes={this.props.harp.blowBend1}/>
          <NotesRow notes={this.props.harp.blow}/>
          <HolesRow holes={this.props.harp.holes}/>
          <NotesRow notes={this.props.harp.draw}/>
          <NotesRow notes={this.props.harp.drawBend1}/>
          <NotesRow notes={this.props.harp.drawBend2}/>
          <NotesRow notes={this.props.harp.drawBend3}/>
        </tbody>
      </table>
      </div>
    );
  }
}

export default Harp;
