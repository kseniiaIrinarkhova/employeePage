import EmployeeInfo from '../EmployeeInfo/EmployeeInfo';
export default function EmployeeContacts({ contacts }) {
    let contactInfo = [];
    //if we have contacts - create list
    if(contacts){
        //create informational cards for phones
    if ("phone" in contacts) {
        for (const type in contacts.phone) {
            let title = `Call ${type.charAt(0).toUpperCase() + type.slice(1)}`
            contactInfo.push(<EmployeeInfo key={type} title={title} info={contacts.phone[type]} />)
            //every mobile phone has an sms option
            if (type === 'mobile')
                contactInfo.push(<EmployeeInfo key="sms" title="SMS" info={contacts.phone.mobile} />)
        }
    }
    //create email information
    if ("email" in contacts) {
        contactInfo.push(<EmployeeInfo key="email" title="Email" info={contacts.email} />)
    }
    }
    return (
        <>
            {contactInfo}
        </>
    );
}