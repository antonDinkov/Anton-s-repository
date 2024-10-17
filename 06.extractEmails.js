function extractEmails(str){

    //const emailRegex = /\b[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z]+(-?[a-zA-Z]+)*(\.[a-zA-Z]+(-?[a-zA-Z]+)*)+\b/g;
    const regex = /\s[a-z0-9][\.\-\w]*[a-z0-9]@[a-z][\.\-a-z]*\.[a-z][\-a-z]*[a-z]\b/gi;
    
    const emails = str.match(regex);

    
    if (emails) {
        emails.forEach(email => console.log(email));
    }

}
extractEmails('Please contact us at: support@github.com.');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. -- steve.parker@softuni.de.')