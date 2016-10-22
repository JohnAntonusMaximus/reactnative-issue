import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, loginUserFail } from '../actions';

class LoginForm extends Component {

    onEmailChange(text){
        this.props.emailChanged(text);
    }

     onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const { email, password, loginUser } = this.props;
        loginUser({email, password});
    }

    renderButton(){
       if(this.props.loading){
           return <Spinner size="large" />;
       } else {
           return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
       }
    }

    render() {
        
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="example@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
            
                <CardSection>
                     <Input 
                        label="Password"
                        placeholder="Enter Password..."
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                        secureTextEntry
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                <CardSection>
                      {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
}

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
        return {
            email,
            password,
            error,
            loading
        };
};


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, loginUserFail })(LoginForm);