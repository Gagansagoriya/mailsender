import nodeMailer from 'nodemailer';
import readline from 'readline';

const createAMailInterface = () =>{

    // 1.First we create a mail and a password 

    const emailUser = 'codingninjas2k16@gmail.com';
    const emailPassword = 'slwvvlczduktvhdj';

    // 2. Second we create a mail transport funciton 

    const transport = nodeMailer.createTransport({

        service :'gmail',
        auth: {
            user:emailUser,
            pass:emailPassword
        }
    });

    // 3. We are create a input and output with the help of readline 

    const createMailInterface = readline.createInterface({

        input : process.stdin,
        output : process.stdout
    });

    // 4. Create a input and output the mail function 

    createMailInterface.question('Please enter your mail : ', async (recipient) =>{

        const mailOptions ={
            from : emailUser,
            to : recipient,
            subject : 'You are so good in coding - Hey there is gagan to send this mail this mail sender function ',
            text : 'Im glad your experience!'
        }

        try{
            const request = await transport.sendMail(mailOptions);
            console.log('Success : Email send successfully to ', recipient);
        }
        catch(err){
            console.log('You enter wrong email address' + err);
        }
        createMailInterface.close();
    });


}

export default createAMailInterface;