import {Box, Button, Card, TextField, Typography} from "@mui/material";
import Fullscreen from "@components/layouts/Fullscreen";
import FlexColumn from "@components/layouts/FlexColumn";
import FlexRow from "@components/layouts/FlexRow";
import Logo from "@assets/images/DevClustersLogo.png";
import Image from "next/image";
import {useRouter} from "next/router";

export default function Signin() {
    const router = useRouter()

    return (
        <Fullscreen
            sx={{
                background: 'linear-gradient(45deg, #0f2027, #203a43, #2c5364)',
                display: 'flex',
                flexDirection: 'grid',
                placeContent: 'center',
                gap: '24px'
            }}>
            <FlexColumn>
                <Card sx={{
                    width: '450px',
                    height: '600px',
                    padding: '48px',
                }}>
                    <FlexColumn spacing={4}>
                        <FlexRow>
                            <Image
                                src={Logo}
                                alt="DevClusters Logo"
                                width={42}
                                height={42}
                                priority
                            />
                            <Typography variant={'h4'} component={'p'}>Sign in</Typography>
                        </FlexRow>
                        <FlexColumn fullWidth spacing={2}>
                            <TextField
                                label={'Email'}
                                type={'email'}
                                variant={'outlined'}
                                fullWidth
                            />
                            <Button variant={'outlined'} fullWidth>
                                Sign in
                            </Button>
                        </FlexColumn>


                        <FlexRow fullWidth>
                            <Box sx={{width: '100%', height: '1px', background: 'black'}}></Box>
                            <Typography
                                variant={'body2'}
                                component={'p'}>
                                Or
                            </Typography>
                            <Box sx={{width: '100%', height: '1px', background: 'black'}}></Box>
                        </FlexRow>

                        <FlexColumn fullWidth spacing={2}>
                            <Button variant={'outlined'} fullWidth>
                                Sign in with Google
                            </Button>
                            <Button variant={'outlined'} fullWidth>
                                Sign in with Facebook
                            </Button>
                            <Button variant={'outlined'} fullWidth>
                                Sign in with Twitter
                            </Button>
                            <Button
                                variant={'outlined'}
                                fullWidth
                                onClick={() => signIn("github")}>
                                Sign in with Github
                            </Button>
                        </FlexColumn>
                    </FlexColumn>
                </Card>
            </FlexColumn>
        </Fullscreen>
    )
}
