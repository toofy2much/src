#Classes for melon orders
class AbstractMelonOrder:
    """A melon order within the USA."""  
    order_type = "Domestic"
    country_code = country_code


    def __init__(self, species, qty, ):
        
        self.species = species
        self.qty = qty
        self.shipped = False
        self.tax = tax

    def get_total(self):
        """Calculate price, including tax."""

        base_price = 5
        total = (1 + self.tax) * self.qty * base_price

        return total

    def mark_shipped(self):
        """Record the fact than an order has been shipped."""

        self.shipped = True

    def get_country_code(self):
        """Return the country code."""

        return self.country_code

    

class DomesticMelonOrder(AbstractMelonOrder):
    """A melon order within the USA."""
    
    #establish class attributes that will be the same for each instance
    country_code = "US"
    order_type = "domestic"
    tax = 0.08

    def __init__(self, species, qty):
    #     """Initialize melon order attributes."""
        
         super().__init__(species, qty)

    #     #self.qty = qty
    #     #self.shipped = False
    #     #self.order_type = "domestic"
    #     #self.tax = 0.08

    # def get_total(self):
    #     """Calculate price, including tax."""

    #     base_price = 5
    #     total = (1 + self.tax) * self.qty * base_price

    #     return total

    # def mark_shipped(self):
    #     """Record the fact than an order has been shipped."""

    #     self.shipped = True


class InternationalMelonOrder(AbstractMelonOrder):
    """An international (non-US) melon order."""
    #establish class attributes for every international instance created
    order_type = "international"
    tax = 0.17

    def __init__(self, species, qty, order_type, country_code):
        """Initialize melon order attributes."""
        super().__init__(species, qty, order_type, country_code)

        #self.species = species
        #self.qty = qty
        #self.country_code = country_code
        #self.shipped = False
        #self.order_type = "international"
        #self.tax = tax

    # def get_total(self):
    #     """Calculate price, including tax."""

    #     base_price = 5
    #     total = (1 + self.tax) * self.qty * base_price

    #     return total

    # def mark_shipped(self):
    #     """Record the fact than an order has been shipped."""

    #     self.shipped = True

    def get_country_code(self):
        """Return the country code."""
        super().get_country_code() 
            
        return self.country_code
