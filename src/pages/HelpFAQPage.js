import React from 'react';
import { 
  Container, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Grid,
  Link
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const faqs = [
  {
    question: "What is the HGA-TOHSA project?",
    answer: "The Human Glycome Atlas - TOHSA (HGA-TOHSA) project is an initiative to create a comprehensive database of glycan structures and related information. It aims to provide researchers with a centralized resource for glycomics data, facilitating advancements in glycobiology research and its applications in medicine and biotechnology."
  },
  {
    question: "How can I access the HGA-TOHSA database?",
    answer: "You can access the HGA-TOHSA database through our 'Access' page. There, you'll find options for browsing the database, using our API, or downloading datasets for offline analysis. Some features may require creating an account and logging in."
  },
  {
    question: "What types of data are available in the HGA-TOHSA database?",
    answer: "The HGA-TOHSA database contains a wide range of glycomics data, including glycan structures, their biological roles, associated proteins, and related diseases. It also includes information on glycan synthesis pathways and analytical data from various experiments."
  },
  {
    question: "How can I contribute data to the HGA-TOHSA project?",
    answer: "We welcome data contributions from researchers. To contribute, please visit our 'Data Submission' page (link to be added) for guidelines on data formats and submission procedures. You can also contact our team directly through the Contact Us page for large-scale data contributions or collaborations."
  },
  {
    question: "How do I use the search function on the website?",
    answer: "The search function on our homepage allows you to query the database for specific glycans, proteins, or related terms. Enter your search term in the search bar and press enter or click the search icon. You can refine your search using advanced filters available on the search results page."
  },
  {
    question: "What do I do if I encounter an error or have trouble using the website?",
    answer: "If you encounter any issues while using the website, please first check that you're using a supported browser (latest versions of Chrome, Firefox, Safari, or Edge). If the problem persists, please contact our support team through the Contact Us page, providing as much detail as possible about the issue you're experiencing."
  },
  {
    question: "Are there any tutorials or guides for using the HGA-TOHSA tools?",
    answer: "Yes, we provide various tutorials and guides in our 'Learn' section. These resources cover topics from basic glycobiology concepts to advanced use of our database and analysis tools. If you need additional help, consider joining one of our periodic webinars or workshops."
  },
  {
    question: "How often is the database updated?",
    answer: "The HGA-TOHSA database is updated on a monthly basis with new data submissions and curated information from recent publications. Major updates, including new features or significant data expansions, are typically released quarterly. Check our 'News and Updates' section for the latest information."
  }
];

const HelpFAQPage = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Help & FAQ
      </Typography>
      <Typography paragraph>
        Welcome to the Help and Frequently Asked Questions page for the Human Glycome Atlas - TOHSA project. Here you'll find answers to common questions about our project and how to use this website. If you can't find the answer you're looking for, please don't hesitate to contact us.
      </Typography>
      
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Grid container spacing={2} style={{ marginTop: '2rem' }}>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Still Need Help?
          </Typography>
          <Typography paragraph>
            If you couldn't find the answer to your question, or if you need further assistance, please don't hesitate to reach out to us:
          </Typography>
          <Typography>
            • Visit our <Link href="/contact">Contact Us</Link> page to send us a message.
          </Typography>
          <Typography>
            • Email us directly at support@hga-tohsa.org for technical support.
          </Typography>
          <Typography>
            • Check our <Link href="/learn">Learn</Link> section for tutorials and guides on using the HGA-TOHSA resources.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HelpFAQPage;