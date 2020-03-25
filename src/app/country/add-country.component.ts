import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountryService } from './country.service';
import { Country } from './country';

@Component({
    templateUrl: './add-country.component.html'
})
export class AddCountryComponent { 
	constructor(private countryService: CountryService) { }
	countryForm = new FormGroup({
	   name: new FormControl(),
	   capital: new FormControl(),
	   currency: new FormControl()
	});	
	onFormSubmit() {
	   let country = this.countryForm.value;
	   this.countryService.addCountry(country)
	      .subscribe(data => {
		    console.log(data);
		  },
		  err => {
		    throw err;
		  }
	      );
	}
} 