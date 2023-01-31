import React, { useContext } from 'react'
import FlexCenter from '../flex/FlexCenter'
import { Box, Button, Modal } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import QuizForm from './form/QuizForm';
import { QuizContext } from '../../context/quiz';
import { ModalContext } from '../../context/modal';

function CreateQuizModal() {
    const { clearTheNewQuiz } = useContext(QuizContext)
    const { modalOpen, closeModal, openModal } = useContext(ModalContext)

    const handleClose = () => { 
        clearTheNewQuiz();  // Clear the new quiz in the context state before closing the modal
        closeModal(false);
    };

    return (
        <>
            <FlexCenter>
                <Button 
                    variant='contained' 
                    color='primary'
                    className='!mt-4'
                    onClick={openModal}
                >
                    Create Quiz
                </Button>
            </FlexCenter>

            {/* Modal */}
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby='create-quiz-modal'
                aria-describedby="create-quiz-modal"
                className='flex justify-center items-center'
            >
                <Box className={`bg-white !pt-8 p-4 m-4 w-full h-[90%] rounded md:m-6 md:w-[90%] relative`}>
                    {/* Close Modal */}
                    <Button 
                        onClick={handleClose}
                        className='!absolute top-0 right-0 !mt-4 !mr-4 !bg-cyan-200 hover:!bg-cyan-400 transition duration-300 ease-in-out z-10'
                    >
                        <CloseIcon />
                    </Button>
                    <div className='relative h-full overflow-hidden'>
                        <FlexCenter>
                            <h2 className='font-bold underline text-lg leading-3 tracking-wider'>Create a new Quiz</h2>
                        </FlexCenter>
                        <QuizForm handleClose={handleClose} />
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default CreateQuizModal