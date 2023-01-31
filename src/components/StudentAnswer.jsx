import { FormControlLabel, Radio } from "@mui/material"

const StudentAnswer = ({q, a, onClick, showValue}) => {
    return (
        <div className='!grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
            {a.map((answer, index) => (
                <div key={index} className='relative'>
                    <FormControlLabel 
                        value={answer.id}
                        {...(showValue && {checked: answer.is_true})}
                        control={<Radio />} 
                        label={answer?.text}
                        {...(q && {checked: q.answer_id+'' === answer.id+''})}
                        onClick={onClick? onClick : null}
                    />
                </div>
            ))}
        </div>
    )
}

export default StudentAnswer