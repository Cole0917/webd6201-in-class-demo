class Contact {

    // Constructor
    constructor(name, contactNumber, emailAddress) {
        this.Name = name
        this.Constructor = contactNumber
        this.EmailAddress = emailAddress
    }

    // Getters and Setters
    get Name() {
        return this.m_name
    }

    set Name(name) {
        this.m_name = name
    }

    get ContactNumber() {
        return this.m_contactNumber
    }

    set ContactNumber(contactNumber) {
        this.m_contactNumber = contactNumber
    }

    get EmailAddress() {
        return this.emailAddress
    }

    set EmailAddress(emailAddress) {
        this.m_emailAddress
    }

    // Public Override Method
    toString() {
        return 'Full Name is ${ this.Name }\nContact Information is ${ this.ContactNumber }\nEmail Address is ${ this.EmailAddress }'
    }
}