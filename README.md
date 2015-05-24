Livestream
=========

New Livestream API

### Documentation

<http://chrisbutler.github.io/livestream>

### Installation

```
meteor add chrisbutler:livestream
```

### Example Usage

```
var livestream = new Livestream('<Account ID>');

livestream.getEvent("<Event ID>", function(err, event){
  //all event data will be available here
});
```
