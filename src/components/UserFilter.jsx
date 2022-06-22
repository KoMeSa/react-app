import RSelect from './UI/select/RSelect';
import RInput from './UI/input/RInput';


const UserFilter = ({ filter, setFilter }) => {

    return (
        <div>
            <RInput value={filter.query} placeholder='search' onChange={e => setFilter({ ...filter, query: e.target.value })} />
            <RSelect defaultValue='Sort by'
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                options={[{ value: 'name', name: 'By name' }, { value: 'surname', name: 'By surname' }]}>
            </RSelect>
        </div>)
}

export default UserFilter;