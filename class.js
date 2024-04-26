class Car {
    constructor(make,model,year,isAvailable){
       this.make = make;
       this.year= year; 
       this.model = model;
       this.isAvailable= isAvailable;
    }

      toggleAvailabilty() {
        this.isAvailable=! this.isAvailable;

      } 
    }
    const rangeover= new Car("rangeover","Ak14",2020,"true")
    console.log({rangeover});

    class Rental{
        constructor(car, renterName,rentalStartDate,rentalEndDate){
            this.car=car;
            this.renterName=renterName;
            this.rentalStartDate= new Date(rentalStartDate);
            this.rentalEndDate = new Date(rentalEndDate);

        }
        calculateRentalDuration(){
       const  differenceInMilliseconds=this.rentalEndDate-this.rentalStartDate;
       const differenceInDays= differenceInMilliseconds/(1000*60*60*24);
       return differenceInDays;
        }
    }
    const uber = new Rental("audi","Alice","2024-6-11","2024-5-12")
    // class car {
    //     constructor(make,model,year,isAvailable){
    //        this.name = name;
    //        this.year= year; 
    //     }
    //     year(){}
     //