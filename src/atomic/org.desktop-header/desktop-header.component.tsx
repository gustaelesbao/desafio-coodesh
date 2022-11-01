import { Spacing, StaticColor } from 'app/constants';
import { Box } from 'atomic/atm.box';
import { Button } from 'atomic/atm.button';
import { Flex } from 'atomic/atm.flex';
import { Col, Grid, Row } from 'atomic/atm.grid';
import { Separator } from 'atomic/atm.separator';
import { Title } from 'atomic/atm.typography';

export const DesktopHeader = () => {
  return (
    <Flex htmlTag='header' width='100%' flexDirection='column' backgroundColor={StaticColor.White}>
      <Flex paddingLeftRight={Spacing.Size0X} paddingTopBottom={Spacing.Size3X}>
        <Grid fluid>
          <Row vAlign='center'>
            <Col xs={12} md={3} vAlign='center'>
              <Title htmlTag='h1' textColor={StaticColor.Black} size='Medium' fontWeight='Bold'>
                Logotipo
              </Title>
            </Col>

            <Col xs={12} md={6} vAlign='center'>
              <Flex htmlTag='nav' gap={Spacing.Size4X} justifyContent='center'>
                <Button variation='light' size='Nano'>
                  Word list
                </Button>
                <Button kind='tertiary' size='Nano'>
                  History
                </Button>
                <Button kind='tertiary' size='Nano'>
                  Favorites
                </Button>
              </Flex>
            </Col>

            <Col xs={12} md={3} vAlign='center'>
              <Flex htmlTag='nav' gap={Spacing.Size1X} justifyContent='flex-end'>
                <Button size='Small'>Login</Button>
                <Button variation='light' size='Small'>
                  Register
                </Button>
              </Flex>
            </Col>
          </Row>
        </Grid>
      </Flex>
      <Separator />
    </Flex>
  );
};
