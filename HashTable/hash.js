class HashMap {

    constructor(size)
    {
        this.Table = Array(size);
        this.Table.fill([],0,size);
    }


    myhashfunction(data)

    {
        if (this.Table.length > data)
        {
            return data;
        }

        else
        {
            return data%this.Table.length;
        }
    }

    addobject(Data)
    {
        var l_key = this.myhashfunction(Data.key);
        this.Table[l_key] = this.Table[l_key].concat(Array(Data));
    }

    findelem(key)
    {
        var l_key = this.myhashfunction(key);
        for (var i=0;i<this.Table[l_key].length;i++)
        {
            if (this.Table[l_key][i].key == key)
            {
                return this.Table[l_key][i].value
            }
        }

        return 'Not found'
    }

    delelem(key)
    {
        var l_key = this.myhashfunction(key);

        if (this.Table[l_key] == [])
        {
            return 'No elem';
        }

        else
        {
            for (var i=0;i<this.Table[l_key].length;i++)
            {
                if (this.Table[l_key][i].key == key)
                {
                    this.Table[l_key].splice(i,1);
                    return 'Deleted';
                    break;
                }
            }


        }

        return 'No elem';
    }
}