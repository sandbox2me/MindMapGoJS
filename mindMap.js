var $ = go.GraphObject.make;  // for conciseness

 myDiagram = $(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
 {
      initialContentAlignment: go.Spot.Center,  // center the content
      "undoManager.isEnabled": true  // enable undo & redo
 });