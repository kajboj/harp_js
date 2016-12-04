import React, { Component } from 'react';

var notes = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]

function HolesRow(props) {
  var holes = props.holes.map((hole) => {
    return (<td key={hole}>{hole}</td>);
  })
  return (<tr>{holes}</tr>);
}

function noteToString(note) {
  var c = notes.length
  return notes[(c+(note%c))%c]
}

function NotesRow(props) {
  var holes = props.notes.map((note, index) => {
    var value
    if (note != null) {
      value = noteToString(note)
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
      harp key: {noteToString(this.props.harp.key)}
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
