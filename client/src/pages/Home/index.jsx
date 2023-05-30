
import style from "./index.module.css"
import { Grid, TextField } from '@mui/material'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deleteById, getAll } from "../../api/httpRequests";
import { Helmet } from 'react-helmet';
import Swal from "sweetalert2"
import AddIcon from '@mui/icons-material/Add';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Home = () => {
    const [childrens, setChildrens] = React.useState([]);


    React.useEffect(() => {
        getAll().then((data) => setChildrens(data));
    }, [setChildrens])



    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name='description' content='Beginner friendly page for learning React Helmet.' />
            </Helmet>
            <section className={style.hero}>
                <div className={style.herotitle}>
                    <span style={{ fontSize: "36px" }}>Mark Rodriguez,12 years old</span>
                    <h1 style={{ fontSize: "36px", marginTop: "15px" }}>NEEDS A LOVING PARENTS</h1>
                    <p style={{ fontSize: "20px", marginTop: "10px", width: '70%' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.</p>
                    <button style={{ padding: "17px 30px", marginTop: "15px", color: "white", backgroundColor: "rgb(188,81,72)", border: "none", borderRadius: "5px" }}>Adopt Him Now!</button>
                </div>

            </section>

            {/* //////////////////steps///////////////// */}
            <section className={style.steps} style={{ display: "flex", justifyContent: "space-evenly",margin:"70px auto" }}>
                <div className={style.info} style={{ width: "400px"}}>
                    <img style={{ width: "400px" }} src="https://www.fundacionunicap.org/wp-content/uploads/2017/07/familia.png" alt="" />
                    <p style={{color:"rgb(134,142,150)"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias nemo et, esse laudantium consequatur. Eum soluta illum architecto dolorum quae suscipit dignissimos! Saepe, amet explicabo nemo eligendi totam sint repudiandae.</p>
                    <button style={{ padding: "10px 30px", border: "1px solid rgb(188,81,72)", color: "rgb(188,81,72)",marginTop:"30px" }}>Adobt a child now</button>

                </div>
                <div className={style.adopt} style={{marginLeft:"50px",width:"30%"}}>
                    <h1>
                        Steps to adopt & foster a child</h1>
                        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Getting started</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Envisioning your family</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Getting approved</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Being matched with a child</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Envisioning your family</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Getting approved</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Being matched with a child</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>


                </div>
            </section>


            {/* /////////////////////children////////// */}
            <section className={style.children} style={{ margin: "200px auto" }}>
                <h1 style={{ textAlign: "center" }}>WAITING CHILDREN</h1>
                <p style={{ textAlign: "center", width: "30%", margin: "25px auto", fontSize: "20px", color: "rgb(169,175,181)" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi unde impedit, necessitatibus, soluta sit quam minima expedita atque corrupti reiciendis.
                </p>
                <button style={{ padding: "15px 30px", backgroundColor: "rgb(188,81,72)", border: "none", borderRadius: "5px", margin: "30px auto", display: "block", color: "white" }}>Find More Waiting Children</button>



                <div className={style.container} style={{ width: "80%", margin: "0 auto" }}>
                    <div className={style.cards}>
                        <Grid container spacing={2}>
                            <TextField onChange={(e) => {
                                getAll(e.target.value).then((data) => setChildrens(data))
                            }} id="outlined-basic" label="Search" variant="outlined" /> <br />
                            {childrens && childrens.map((children) => {
                                return (

                                    <Grid item lg={4}>


                                        <Card sx={{ maxWidth: 380 }}>
                                            <div className={style.card}>
                                                <CardMedia
                                                    style={{ objectPosition: "center top", width: "100%" }}
                                                    component="img"
                                                    alt="green iguana"
                                                    height="240"
                                                    image={children.image}
                                                />
                                            </div>
                                            <CardContent style={{ display: "flex", alignItems: "center", marginLeft: "5px" }}>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {children.name}
                                                </Typography>,
                                                <Typography variant="body2" color="text.secondary" style={{ fontSize: "15px" }}>
                                                    {children.age} yrs.old
                                                </Typography>
                                                <button onClick={() => {
                                                    Swal.fire({
                                                        position: 'top-end',
                                                        icon: 'success',
                                                        title: 'Your work has been saved',
                                                        showConfirmButton: false,
                                                        timer: 1500
                                                    })
                                                    deleteById(children._id);
                                                    setChildrens(
                                                        childrens.filter((x) => x._id != children._id)
                                                    )
                                                }}>Delete</button>
                                            </CardContent>

                                        </Card>

                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>

                </div>
            </section>

            {/* ///////////////stories///////// */}
            <section className={style.stories}>
                <h2 style={{ textAlign: "center" }}>FEATURED STORIES </h2>

                <div className={style.storycards}>
                    <Grid container spacing={2} style={{ width: "60%", margin: "0 auto", overflow: "hidden" }}>
                        <Grid style={{ overflow: "hidden", position: "relative" }} item lg={4}>
                            <img style={{ width: "100%", height: "100%" }} src="https://preview.colorlib.com/theme/adopted/img/work_thumb_1.jpg" alt="" />
                            <div className={style.detail} style={{  textAlign: "center",position:"absolute",top:"0",left:"0",width:"100%",height:"100%",backgroundColor:"black",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",opacity:"0.5",zIndex:"-1" }}>
                                <AddIcon />
                                <p>January 31,2018</p>
                                <h3> "Being loved has taught me how to love"</h3>
                            </div>
                        </Grid>
                        <Grid style={{ overflow: "hidden" }} item lg={4}>
                            <img style={{ width: "400px", height: "400px" }} src="https://preview.colorlib.com/theme/adopted/img/work_thumb_2.jpg" alt="" />
                        </Grid>
                        <Grid style={{ overflow: "hidden" }} item lg={4}>
                            <img style={{ width: "400px", height: "400px" }} src="https://preview.colorlib.com/theme/adopted/img/work_thumb_3.jpg" alt="" />
                        </Grid>
                    </Grid>
                </div>

            </section>
        </div>
    )
}

export default Home