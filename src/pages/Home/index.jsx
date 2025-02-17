import { Container, Brand, Search, Menu, Content, NewNote} from './styles.js';

import {Header} from '../../components/Header';
import {ButtonText} from '../../components/ButtonText';

export function Home () {

  return (
    <Container>
      <Brand>
        <h1>
          RocketNotes
        </h1>
      </Brand>

      <Header/>
      
      <Menu>
        <li><ButtonText title="Todos" /></li>
        <li><ButtonText title="React" isActive ={false}  /></li>
        <li><ButtonText title="Node"  isActive ={false}/></li>
        
      </Menu>

      <Search>

      </Search>

      <Content>

      </Content>
 
      <NewNote> </NewNote>
    </Container>
  );

};