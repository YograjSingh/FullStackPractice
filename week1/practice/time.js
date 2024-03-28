class Clock {
    constructor() {
      // 1. Create a Date object.
      let date=new Date();
      // 2. Store the hours, minutes, and seconds.
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      // 3. Call printTime.
      this.printTime()
      // 4. Schedule the tick at 1 second intervals.
      console.log("Before set interval line");
      setInterval(()=>{console.log("Calling Tick()");this._tick()}, 1000);
      console.log("After set interval line");
      
      
    }
  
    printTime() {
      // Format the time in HH:MM:SS
      // Use console.log to print it.
      console.log("Printing");
      console.log(this.hours+" "+this.minutes+" "+this.seconds);
    }
  
    _tick() {
      // 1. Increment the time by one second.
      console.log("Adding");
      this.seconds=this.seconds+1;
      if (this.seconds >= 60) {
        this.seconds = 0;
        this.minutes += 1;
        if (this.minutes >= 60) {
          this.minutes = 0;
          this.hours += 1;
          if (this.hours >= 24) {
            this.hours = 0;
          }
        }
      }
      // 2. Call printTime.
      this.printTime(this.hours, this.minutes, this.seconds);
 
      
    }
  }
  
  const clock = new Clock();