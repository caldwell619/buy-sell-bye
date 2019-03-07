package adlister.main.repositories;
import adlister.main.models.AdCategory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdCategoryRepository extends CrudRepository<AdCategory, Long> {
    AdCategory findById(long id);
}

