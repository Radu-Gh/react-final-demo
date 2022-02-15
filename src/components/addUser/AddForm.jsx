import React, {useState} from 'react';
import './AddForm.css';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addUserReducer } from '../../redux/user/userReducer';

const UserAddForm = () => {
    const [user, setUser] = useState({
        id: 0,
        name: '',
        firstName: '',
        job: '',
        salary: 0,
        date: 0
    });

    const dispatch = useDispatch();
    const addUser = user => dispatch(addUserReducer(user));

    const getMaxId = user => {
        let maxId = 0;
    
        user.forEach(user => {
          if (user.id > maxId) {
            maxId = user.id;
          }
        });
        return maxId;
    };

    const submitHandler = event => {
        event.preventDefault();
        if (user.trim() === "") return;
        user.id = getMaxId(user) + 1;
        addUser(user); 
    };

    const onChange = event =>{
        setUser({...user, [event.target.name]: event.target.value});
    }

    let d = new Date();
    let date = d.getFullYear().toString() + '-' + (d.getMonth()+1).toString().padStart(2, '0') + '-' + d.getDate().toString().padStart(2, '0');
    return(
        <div>
            <form
                className="user-add-form"
                onSubmit={submitHandler}
            >
                <h2>Adauga persoane:</h2>
                
                <div className='inputBox'>
                    <label htmlFor="name">Nume:</label>
                    <input
                        type="text"
                        name="name"
                        id='name'
                        onChange={onChange}
                    />
                </div>

                <div className='inputBox'>
                    <label htmlFor="firstName">Prenume:</label>
                    <input
                        type="text"
                        name="firstName"
                        id='firstName'
                        onChange={onChange}
                    />
                </div>

                <div className='inputBox'>
                    <label htmlFor="job">Meserie:</label>
                    <input
                        type="text"
                        name="job"
                        id='job'
                        onChange={onChange}
                    />
                </div>

                <div className='inputBox'>
                    <label htmlFor="salary">Salariu:</label>
                    <input
                        type="number"
                        name="salary"
                        id='salary'
                        onChange={onChange}
                    />
                </div>

                <div className='inputBox'>
                    <label htmlFor="date">Data angajarii:</label>
                    <input
                        type="date"
                        name="date"
                        id='date'
                        value = {date}
                        onChange={onChange}
                    />
                </div>

                <button type="submit"> Adauga </button>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        store: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addUserReducer: (payload) => dispatch(addUserReducer(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps, null, { user })(UserAddForm);